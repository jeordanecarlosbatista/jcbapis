function sum(a: number, b: number): number {
  return a + b;
}

describe("Sum function", () => {
  it("should add two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
