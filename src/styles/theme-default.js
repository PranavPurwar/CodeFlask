export const BACKGROUND_COLOR = '#fff'
export const LINE_HEIGHT = '20px'
export const FONT_SIZE = '16px'
export const KEYWORD_COLOR = '#8500ff' // New variable for repeated color

export const defaultCssTheme = `
.codeflask {
  background: ${BACKGROUND_COLOR};
  color: #4f559c;
}

.codeflask .token.punctuation {
  color: #4a4a4a;
}

.codeflask .token.keyword {
  color: ${KEYWORD_COLOR}; // Updated to use variable
}

.codeflask .token.operator {
  color: #ff5598;
}

.codeflask .token.string {
  color: #41ad8f;
}

.codeflask .token.comment {
  color: #9badb7;
}

.codeflask .token.function {
  color: ${KEYWORD_COLOR}; // Updated to use variable
}

.codeflask .token.boolean {
  color: ${KEYWORD_COLOR}; // Updated to use variable
}

.codeflask .token.number {
  color: ${KEYWORD_COLOR}; // Updated to use variable
}

.codeflask .token.selector {
  color: ${KEYWORD_COLOR}; // Updated to use variable
}

.codeflask .token.property {
  color: ${KEYWORD_COLOR}; // Updated to use variable
}

.codeflask .token.tag {
  color: ${KEYWORD_COLOR}; // Updated to use variable
}

.codeflask .token.attr-value {
  color: ${KEYWORD_COLOR}; // Updated to use variable
}
`
