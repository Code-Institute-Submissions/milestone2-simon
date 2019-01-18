describe("Testing power", () => {
    describe("Power Button", () => {
        it("should return true", () => {
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
        it("should return '<empty>'", () => {
            expect(countScreen.innerHTML).toBe("---");
        });
    });
});

describe("", () => {
    describe("", () => {
        it("", () => {
            expect()
        })
    })
})