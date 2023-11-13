import { EventEmitter } from "../lib/events";

describe("EventEmitter", () => {
  it("should call event handlers correctly", () => {
    const handler1 = jest.fn();
    const handler2 = jest.fn();

    const events = new EventEmitter();

    events.on("testEvent", handler1);
    events.on("testEvent", handler2);

    events.publish("testEvent", "arg1", "arg2");

    expect(handler1).toHaveBeenCalledWith("arg1", "arg2");
    expect(handler2).toHaveBeenCalledWith("arg1", "arg2");
  });
});

describe("EventEmitter", () => {
  it("should call event handlers only for the correct event", () => {
    const handler1 = jest.fn();
    const handler2 = jest.fn();

    const events = new EventEmitter();

    events.on("eventA", handler1);
    events.on("eventB", handler2);

    events.publish("eventA", "arg1", "arg2");

    expect(handler1).toHaveBeenCalledWith("arg1", "arg2");
    expect(handler2).not.toHaveBeenCalled();
  });
});

describe("EventEmitter", () => {
  it("should call event handlers in the order they were registered", () => {
    const calls: string[] = [];

    const handler1 = () => calls.push("handler1");
    const handler2 = () => calls.push("handler2");
    const handler3 = () => calls.push("handler3");

    const events = new EventEmitter();

    events.on("testEvent", handler1);
    events.on("testEvent", handler2);
    events.on("testEvent", handler3);

    events.publish("testEvent");

    expect(calls).toEqual(["handler1", "handler2", "handler3"]);
  });
});
