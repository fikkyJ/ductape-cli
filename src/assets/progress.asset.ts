// @ts-ignore
import Progress from 'cli-progress';

const progress_bar = new Progress.SingleBar({
    format: '{bar}',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true
  }, Progress.Presets.shades_classic);
  
export default progress_bar;