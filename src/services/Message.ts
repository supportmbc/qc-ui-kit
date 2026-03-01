import { message } from 'antd';

class MessageService {
  static success(content: string, duration: number = 3) {
    return message.success(content, duration);
  }

  static error(content: string, duration: number = 3) {
    return message.error(content, duration);
  }

  static warning(content: string, duration: number = 3) {
    return message.warning(content, duration);
  }

  static info(content: string, duration: number = 3) {
    return message.info(content, duration);
  }

  static loading(content: string, duration: number = 3) {
    return message.loading(content, duration);
  }

  static config(options: { maxCount?: number; duration?: number }) {
    message.config(options);
  }
}

export default MessageService;
