from pytube import Playlist
playlist = Playlist("https://youtube.com/playlist?list=PLZoTAELRMXVMBr14UQ30AFlnlQ7eL5wjl&si=kRdbEqeO8rYFCVXB")
for video in playlist.videos:
    print(video.watch_url)