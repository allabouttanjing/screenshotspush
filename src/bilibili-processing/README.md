#### Processing videos, audios and frames from downloaded data

#### Usage
```bash
walpha@MSI:~/dev/ts$ node src/bilibili-processing/main.js -h
usage: main.js [-h] [-v] -i INPUT_DIR -o OUTPUT_DIR [-t TARGET_NAME]
               [-d DRY_RUN]


Processing downloaded files from bilibili

Optional arguments:
  -h, --help            Show this help message and exit.
  -v, --version         Show program's version number and exit.
  -i INPUT_DIR, --input_dir INPUT_DIR
                        directory for downloaded file(s), use abs path.
                        should always be the top level
  -o OUTPUT_DIR, --output_dir OUTPUT_DIR
                        directory for outputing/caching the processing
                        results, use abs path. should always be the top level
  -t TARGET_NAME, --target_name TARGET_NAME
                        name for the only video to be processed, only partial
                        is needed
  -d DRY_RUN, --dry_run DRY_RUN
                        has to be specified as "false" in order not to dry
                        run (NOT USED FOR NOW)
```
sample usage: 
```bash
node src/bilibili-processing/main.js -o ~/path/to/bilibili-generated  -i /path/to/bilibili-downloaded
```

#### Misc
```bash
# cut between specific range. THE ORDER OF ARGUMENTS MATTERS!
ffmpeg -i $in -ss 00:02:17.900  -to 00:06:27.000 -c copy $out
```