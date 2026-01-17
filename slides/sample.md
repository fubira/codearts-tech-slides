---
marp: true
theme: default
paginate: true
header: "Sample Presentation"
footer: "codearts-tech-docs"
---

# Marp Sample Slide

Lightning Talk Template

---

## What is Marp?

- Markdown Presentation Ecosystem
- Write slides in pure Markdown
- Export to HTML / PDF / PPTX

---

## Slide Separator

Use `---` to create a new slide

```markdown
# Slide 1

Content here

---

# Slide 2

More content
```

---

## Code Highlighting

```typescript
const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greet("World"));
```

---

## Lists

### Unordered
- Item 1
- Item 2
- Item 3

### Ordered
1. First
2. Second
3. Third

---

## Images

```markdown
![width:300px](../assets/image.png)
```

Size control with `width:` or `height:`

---

## Themes

Available themes:
- `default` - Clean and simple
- `gaia` - Modern with accent colors
- `uncover` - Minimal design

Change in frontmatter:
```yaml
theme: gaia
```

---

## Background

```markdown
<!-- backgroundColor: #1e1e1e -->
<!-- color: white -->
```

Or use background image:
```markdown
![bg](image.jpg)
```

---

<!-- class: lead -->

# Thank You!

Questions?
