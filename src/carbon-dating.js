import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = 0.693 / HALF_LIFE_PERIOD;

export default function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false;
  if (sampleActivity === undefined) return false;
  const sampleActivityNumber = parseFloat(sampleActivity);
  if (isNaN(sampleActivityNumber)) return false;
  if (sampleActivityNumber > MODERN_ACTIVITY) return false;
  if (sampleActivityNumber <= 0) return false;
  const LogValue = Math.log(MODERN_ACTIVITY / sampleActivityNumber)
  return Math.ceil(LogValue / k);
}

