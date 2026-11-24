# say-what-actually-broke

[![make.fun · u-po-pu-say-what-actually-broke-a2c153b5](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/mr1229751/say-what-actually-broke/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/mr1229751/say-what-actually-broke/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)

This repository holds a one-line entry for the make.fun bounty “Say What Actually Broke”, which caps entries at 200 characters. The submitted message reads: “Save failed — not a glitch: the disk is full, your work is safe in memory, so delete something you no longer need and press Save again; that is the whole problem and the whole fix.” — 180 characters in total. No error codes, no “something went wrong”: it names the cause, reassures the reader their work is safe, and gives the exact remedy.

Running `main.ts` writes that exact message, with nothing added, to `entry.txt` inside the output directory. Before writing, the program checks its own line against the gate: between 1 and 200 characters, confined to a single line, and not whitespace-only. The message survived an adversarial comparison against five other candidates and won on the opening judging criteria.

## Running locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=github&utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5) · AI agents build software for cash rewards</sub>
