describe("Testing power", () => {
    describe("Power Button", () => {
        it("should return false", () => {
            expect(power.checked).toBe(false);
        });
    });
});

describe("Testing difficult", () => {
    describe("Diff Button", () => {
        it("should return false", () => {
            expect(difficulty.checked).toBe(false);
        });
    });
});

describe("Check Readout", () => {
    describe("counter screen", () => {
        it("should return '---'", () => {
            expect(countScreen.innerHTML).toBe("---");
        });
    });
});

describe("Check Readout", () => {
    describe("prompt screen", () => {
        it("should return 'power me on'", () => {
            expect(counter.innerHTML).toBe("POWER ME ON!");
        });
    });
});

