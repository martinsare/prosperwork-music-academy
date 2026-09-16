import fs from 'fs';
import path from 'path';
import https from 'https';

const outputDir = path.resolve(process.cwd(), 'public/images/showcase');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Verified high quality royalty-free educational music & academy photos
const showcaseSources = {
  // 1. Online / In-person Piano Lesson
  'showcase-piano-lesson.jpg': 'https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&w=1200&q=85',
  
  // 2. Saxophone Student Performance & Recital
  'showcase-sax-recital.jpg': 'https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&cs=tinysrgb&w=1200',

  // 3. Vocal Masterclass & Voice Coaching
  'showcase-vocal-coaching.jpg': 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85',

  // 4. Drums & Rhythm Lesson
  'showcase-drum-lesson.jpg': 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=1200&q=85',

  // 5. Violin Practice & Bowing Mastery
  'showcase-violin-student.jpg': 'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?auto=format&fit=crop&w=1200&q=85',

  // 6. Acoustic Guitar Fingerpicking Lesson
  'showcase-guitar-student.jpg': 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=1200&q=85',

  // 7. Jesus Kids Choir & Fellowship
  'showcase-jesus-kids.jpg': 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=85',

  // 8. Student Annual Showcase & Awards Certificate
  'showcase-annual-awards.jpg': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85',

  // 9. 1-on-1 Online Music Class Session on Laptop
  'showcase-online-session.jpg': 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1200&q=85',

  // 10. Video Thumbnail: Piano Solo Recital
  'video-thumb-piano-recital.jpg': 'https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?auto=compress&cs=tinysrgb&w=1200',

  // 11. Video Thumbnail: Saxophone Melodic Worship
  'video-thumb-sax-solo.jpg': 'https://images.pexels.com/photos/45243/saxophone-music-gold-gloss-45243.jpeg?auto=compress&cs=tinysrgb&w=1200',

  // 12. Video Thumbnail: Vocal Breathwork Masterclass
  'video-thumb-vocal-warmup.jpg': 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=85',

  // 13. Video Thumbnail: Jesus Kids Praise & Worship
  'video-thumb-kids-praise.jpg': 'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?auto=format&fit=crop&w=1200&q=85',
};

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        return reject(new Error(`Status ${response.statusCode}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    });
    req.on('error', (err) => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      reject(err);
    });
  });
}

async function run() {
  console.log(`Downloading showcase and gallery images to ${outputDir}...`);
  for (const [filename, url] of Object.entries(showcaseSources)) {
    const dest = path.join(outputDir, filename);
    console.log(`Downloading ${filename}...`);
    try {
      await download(url, dest);
      const stats = fs.statSync(dest);
      console.log(`✓ Saved ${filename} (${Math.round(stats.size / 1024)} KB)`);
    } catch (err) {
      console.error(`✗ Error downloading ${filename}:`, err.message);
    }
  }
  console.log('Showcase images download complete!');
}

run();

