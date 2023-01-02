import { CodeExample } from "../components/CodeExample";
import { Method } from "../components/Method";
import { Velo } from "../components/Velo";
import { Rest } from "../components/Rest";
import { Internal } from "../components/Internal";

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
  children: ['paragraph', 'tag', 'list', 'inline'],
  selfClosing: false,
}

export const rest = {
  render: Rest,
  children: ['paragraph', 'tag', 'list', 'inline'],
  selfClosing: false,
}

export const internal = {
  render: Internal,
  children: ['paragraph', 'tag', 'list', 'inline'],
  selfClosing: false,
}

export const codeExample = {
  render: CodeExample,
  selfClosing: true,
  attributes: {
    frontmatter: {
      type: Object
    }
  }
}