var request = require("request");

describe("calc", () => {
  it("should multiple 2 and 2", () => {
    expect(2 * 2).toBe(4);
  });
});

describe("get data", () => {
  it("should download more than one record", (done) => {
    request.get(
      "http://www.nokeynoshade.party/api/queens/all",
      (error, response) => {
        console.log(`response.body = `, response.body);
        expect(JSON.parse(response.body).length).toBeGreaterThan(150);
        done();
      }
    );
  });
});
