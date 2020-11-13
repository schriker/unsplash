function random(min: number = 0, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default random;
