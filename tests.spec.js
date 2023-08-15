const resolver = require("./calculator").calculator;

test("Basic expressions", () => {
    // Addition and Subtraction
    expect(resolver('2 + 3 - 1')).toBe(4);
    expect(resolver('5.75 + 2 - 1.25')).toBe(6.50); 
  
    // Multiplication and Division
    expect(resolver('4 * 3 / 2')).toBe(6.00);  
    expect(resolver('2.5 / 1.25 * 4')).toBe(8.00);  
  
    // Combination of Operators
    expect(resolver('6 + 2 * 3')).toBe(12);
    expect(resolver('8 - 4 / 2')).toBe(6.00);  
  
    // Mixed Operators
    expect(resolver('10 + 3 * 2 - 4 / 2')).toBe(14.00);  
    expect(resolver('6 * 2 + 3.5 - 1.5 / 2')).toBe(14.75);  

  });


test("Expressions with Parentheses", () => {
    // Simple Parentheses
    expect(resolver('(2 + 3)')).toBe(5);
    expect(resolver('4 * (6 - 2)')).toBe(16);
    expect(resolver('(8 + 2) * (9 - 3)')).toBe(60);
  
    // Multiple Parentheses
    expect(resolver('2 + (3 * 4)')).toBe(14);
    expect(resolver('(5 - 2) + (6 / 2)')).toBe(6.00);  
    expect(resolver('(4 + 2) * (7 - 3) / 2')).toBe(12.00);  
  
    // Nested Parentheses
    expect(resolver('(3 + 2) * (6 - 4) + 5')).toBe(15);
    expect(resolver('2 * ((8 - 4) + 3) / 2')).toBe(7.00);  
    expect(resolver('2.5 + (4 * (6 - 3.5))')).toBe(12.5);  
  });


  test("Expressions Negative Numbers", () => {
    // Nested Parentheses with Negative Numbers
    expect(resolver('((-2) + 3)')).toBe(1);
    expect(resolver('4 * ((-6) + (- 2))')).toBe(-32);
    expect(resolver('(8 + 2) * (9 - (-3))')).toBe(120);
  
    //Multiple Parentheses with Negative Numbers
    expect(resolver('-2 + (3 * 4)')).toBe(10);
    expect(resolver('(5 - 2) + (6 / (-2))')).toBe(0);  
    expect(resolver('0-0')).toBe(0);  
  
    //Mixed Parentheses with Negative Numbers
    expect(resolver('(3 + 2) * (6 - 4) + 5')).toBe(15);
    expect(resolver('2 * ((8 - 4) + 3) / 2')).toBe(7.00);  
    expect(resolver('2.5 + (4 * (6 - 3.5))')).toBe(12.5);  
  
    //Negative Numbers
    expect(resolver('-2 + 3')).toBe(1);  
    expect(resolver('-3 * 4')).toBe(-12);  
  
    //Negative Numbers with Parentheses
    expect(resolver('(-2 + 3) * 4')).toBe(4);  
    expect(resolver('-4 * (-6 - 2)')).toBe(32);  
    expect(resolver('-(-8 + 2) * (-9 - (-3))')).toBe(-36);  
  
  });
  
  
  

