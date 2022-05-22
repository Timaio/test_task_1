function filterCourses(courses, range) {
  let result = [];
  courses.forEach((c) => {
    const r0 = range[0];
    const c0 = c.prices[0];
    const r1 = range[1] || Infinity;
    const c1 = c.prices[1] || Infinity;
    if ((r0 <= c0 && c0 <= r1) || 
      (r0 <= c1 && c1 <= r1) ||
      (c0 <= r0 && r1 <= c1)) {
        result.push(c);
    }
  });

  let steps = result.length - 1;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < steps; i += 1) {
      if (result[i].prices[0] > result[i + 1].prices[0]) {
        const temp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = temp;
        swapped = true;
      }
    }
    steps -= 1;
  } while (swapped);
  return result;
}
