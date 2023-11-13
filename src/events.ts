type EventHandler = (...args: any[]) => void;

export class EventEmitter {
  private events: { [key: string]: EventHandler[] } = {};

  public on(event: string, handler: EventHandler): void {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(handler);
  }

  public publish(event: string, ...args: any[]): void {
    const handlers = this.events[event];
    if (handlers) {
      handlers.forEach((handler) => handler(...args));
    }
  }
}
