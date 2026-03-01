import { notification } from 'antd';
import type { ArgsProps } from 'antd/es/notification';

class NotificationService {
  static success(config: ArgsProps) {
    return notification.success(config);
  }

  static error(config: ArgsProps) {
    return notification.error(config);
  }

  static warning(config: ArgsProps) {
    return notification.warning(config);
  }

  static info(config: ArgsProps) {
    return notification.info(config);
  }

  static open(config: ArgsProps) {
    return notification.open(config);
  }

  static config(options: { placement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'; duration?: number }) {
    notification.config(options);
  }
}

export default NotificationService;
