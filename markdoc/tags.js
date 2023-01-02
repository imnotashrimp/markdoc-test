import { CodeExample } from "../components/CodeExample";
import { Method } from "../components/Method";
import { Velo } from "../components/Velo";
import { Rest } from "../components/Rest";

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
  attributes: {
    frontmatter: {
      type: Object
    }
  }
}

export const rest = {
  render: Rest,
  children: ['paragraph', 'tag', 'list', 'inline'],
  selfClosing: false,
  attributes: {
    frontmatter: {
      type: Object
    }
  }
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