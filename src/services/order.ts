class OrderService {
  timerId: NodeJS.Timeout | undefined;
  delay = 100;

  constructor(delay?: number) {
    this.delay = delay || 100;
  }

  async createOrder<T>(payload: T): Promise<T> {
    return await new Promise((resolve) => {
      this.timerId = setTimeout(() => {
        resolve(payload);
      }, this.delay);
    });
  }

  clearTimerId() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }
}

const orderService = new OrderService(1000);

export default orderService;
