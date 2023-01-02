import { Method } from "../components/Method";
import { Velo } from "../components/Velo";

export const method = {
  render: Method,
  selfClosing: true,
  attributes: {
    frontmatter: {
      type: Object
    },
  }
};

export const velo = {
  render: Velo,
  children: ['paragraph', 'tag', 'list'],
  selfClosing: false,
  attributes: {
    frontmatter: {
      type: Object
    }
  }
}