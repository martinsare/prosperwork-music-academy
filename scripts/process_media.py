import subprocess
import os
import imageio_ffmpeg
from PIL import Image

ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()

os.makedirs('public/videos', exist_ok=True)
os.makedirs('public/images/showcase', exist_ok=True)

clips = [
    {
        'src': 'public/images/IMG_4780.MP4',
        'start': '00:00:00',
        'duration': '26',
        'out': 'public/videos/deborah-sax-recital.mp4',
        'scale': '1280:720',
        'thumb_sec': '10',
        'thumb_out': 'public/images/showcase/video-thumb-deborah-recital.jpg'
    },
    {
        'src': 'public/images/IMG_4780.MP4',
        'start': '00:00:27',
        'duration': '63',
        'out': 'public/videos/deborah-mordi-testimonial.mp4',
        'scale': '1280:720',
        'thumb_sec': '32',
        'thumb_out': 'public/images/showcase/video-thumb-deborah-testimonial.jpg'
    },
    {
        'src': 'public/images/IMG_4781.MP4',
        'start': '00:00:00',
        'duration': '15',
        'out': 'public/videos/student-sax-performance.mp4',
        'scale': '720:1280',
        'thumb_sec': '5',
        'thumb_out': 'public/images/showcase/video-thumb-student-sax-performance.jpg'
    },
    {
        'src': 'public/images/IMG_4781.MP4',
        'start': '00:00:15',
        'duration': '60',
        'out': 'public/videos/student-sax-story.mp4',
        'scale': '720:1280',
        'thumb_sec': '25',
        'thumb_out': 'public/images/showcase/video-thumb-student-sax-story.jpg'
    },
]

for c in clips:
    out_path = c['out']
    print(f"Processing {out_path}...")
    cmd = [
        ffmpeg, '-y',
        '-ss', c['start'],
        '-i', c['src'],
        '-t', c['duration'],
        '-vf', f"scale={c['scale']}",
        '-c:v', 'libx264',
        '-preset', 'fast',
        '-crf', '23',
        '-c:a', 'aac',
        '-b:a', '128k',
        '-movflags', '+faststart',
        out_path
    ]
    subprocess.run(cmd, check=True)
    
    thumb_cmd = [
        ffmpeg, '-y',
        '-ss', c['thumb_sec'],
        '-i', c['src'],
        '-vframes', '1',
        '-q:v', '2',
        c['thumb_out']
    ]
    subprocess.run(thumb_cmd, check=True)
    print(f"Completed {out_path} and {c['thumb_out']}")

print("All video clips and posters successfully created!")

