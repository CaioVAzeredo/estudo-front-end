import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as iconSet from "@fortawesome/free-solid-svg-icons";

import { theme } from './theme';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function renderCSSValue(cssPropName, cssPropValue) {
  if (cssPropName.includes('horizontal')) {
    return `
      ${cssPropName.replace('horizontal', 'left')}: ${cssPropValue};
      ${cssPropName.replace('horizontal', 'right')}: ${cssPropValue};
    `;
  }
  if (cssPropName.includes('vertical')) {
    return `
      ${cssPropName.replace('vertical', 'top')}: ${cssPropValue};
      ${cssPropName.replace('vertical', 'bottom')}: ${cssPropValue};
    `;
  }

  return cssPropName + ':' + cssPropValue + ';';
}
function renderCSS(props, currentBreakpoint) {
  if (!props) return '';

  return Object
    .keys(props)
    .map((prop) => {
      const cssPropName = prop.split(/(?=[A-Z])/).join('-').toLowerCase();
      const cssPropValue = props[prop];
      const isCssPropValueAnObject = Object.prototype.toString.call(cssPropValue) === '[object Object]';
      const currentCssPropValue = cssPropValue[currentBreakpoint];

      if (currentBreakpoint == 'xs' && !isCssPropValueAnObject) {
        return renderCSSValue(cssPropName, cssPropValue);
      }

      if (currentCssPropValue) {
        return renderCSSValue(cssPropName, currentCssPropValue);
      }
    }).filter(Boolean).join('');
}

export function Box({
  as,
  styleSheet = {}, // Adicione um valor padrão aqui
  ...props
}) {
  const {
    focus = {}, // Valor padrão para evitar erros
    hover = {}, // Valor padrão para evitar erros
    srOnly = false, // Valor padrão para srOnly
    ...restStyleSheet
  } = styleSheet;

  const Tag = as || 'div';

  return (
    <React.Fragment>
      <Tag
        {...props}
        className={`${props.className || ''} ${srOnly ? 'sr-only' : ''}`}
      />
      <style jsx>{`
        ${Tag} {
          ${renderCSS(restStyleSheet, 'xs')};
        }
        ${Tag}:hover {
          ${renderCSS(hover, 'xs')};
        }
        ${Tag}:focus {
          ${renderCSS(focus, 'xs')};
        }
        @media screen and (min-width: ${theme.breakpoints['Breakpoints.sm']}px) {
          ${Tag} {
            ${renderCSS(restStyleSheet, 'sm')};
          }
          ${Tag}:hover {
            ${renderCSS(hover, 'sm')};
          }
          ${Tag}:focus {
            ${renderCSS(focus, 'sm')};
          }
        }
        @media screen and (min-width: ${theme.breakpoints['Breakpoints.md']}px) {
          ${Tag} {
            ${renderCSS(restStyleSheet, 'md')};
          }
          ${Tag}:hover {
            ${renderCSS(hover, 'md')};
          }
          ${Tag}:focus {
            ${renderCSS(focus, 'md')};
          }
        }
        @media screen and (min-width: ${theme.breakpoints['Breakpoints.lg']}px) {
          ${Tag} {
            ${renderCSS(restStyleSheet, 'lg')};
          }
          ${Tag}:hover {
            ${renderCSS(hover, 'lg')};
          }
          ${Tag}:focus {
            ${renderCSS(focus, 'lg')};
          }
        }
        @media screen and (min-width: ${theme.breakpoints['Breakpoints.xl']}px) {
          ${Tag} {
            ${renderCSS(restStyleSheet, 'xl')};
          }
          ${Tag}:hover {
            ${renderCSS(hover, 'xl')};
          }
          ${Tag}:focus {
            ${renderCSS(focus, 'xl')};
          }
        }
      `}</style>
    </React.Fragment>
  );
}


/* @media screen and (min-width: ${theme.breakpoints['Breakpoints.md']}px) {
  ${renderCSS(styleSheet, 'md')};
  :hover {
    ${renderCSS(hover, 'md')};
  }
  :focus {
    ${renderCSS(focus, 'md')};
  }
}
@media screen and (min-width: ${theme.breakpoints['Breakpoints.lg']}px) {
  ${renderCSS(styleSheet, 'lg')};
  :hover {
    ${renderCSS(hover, 'lg')};
  }
  :focus {
    ${renderCSS(focus, 'lg')};
  }
}
@media screen and (min-width: ${theme.breakpoints['Breakpoints.xl']}px) {
  ${renderCSS(styleSheet, 'xl')};
  :hover {
    ${renderCSS(hover, 'xl')};
  }
  :focus {
    ${renderCSS(focus, 'xl')};
  }
} */
Box.defaultProps = {
  styleSheet: {}, // Certifique-se de que o valor padrão seja um objeto vazio
};

export function Icon({ as, styleSheet, ...props }) {
  const {
    iconVariant,
    ...restStyleSheet
  } = styleSheet;
  const styleSheetUpdated = restStyleSheet;

  console.log('iconVariant', iconVariant);

  return (
    <Box
      as={FontAwesomeIcon}
      icon={iconSet[`fa${capitalize(iconVariant)}`]}
      crossOrigin="anonymous"
      styleSheet={{
        width: '1.5ch',
        height: '1.5ch',
        ...styleSheetUpdated
      }}
      {...props}
    />
  )
}

export function Text({ as, styleSheet = {}, ...props }) {
  const {
    textVariant = {
      fontSize: 'inherit', // Valor padrão
    },
    ...restStyleSheet
  } = styleSheet;

  const tag = as || 'span';

  return (
    <Box
      as={tag}
      styleSheet={{
        ...textVariant,
        ...restStyleSheet,
      }}
      {...props}
    />
  );
}

Text.defaultProps = {
  styleSheet: {}, // Garante que styleSheet nunca seja undefined
};


export function Image({ as, ...props }) {
  const tag = as || 'img';
  const {
    children,
    dangerouslySetInnerHTML,
    ...imageProps
  } = props;

  return (
    <Box as={tag} {...imageProps} />
  );
}
Image.defaultProps = {
  styleSheet: {},
};

export function Input({ as, styleSheet, ...props }) {
  const tag = 'input';
  const finalStyleSheet = {
    transition: 'all 0.2s ease-in-out',
    outline: 0,
    textVariant: theme.typography.variants.body2,
    color: theme.colors.neutral[900],
    boxShadow: `0 5px 7px -5px ${theme.colors.neutral[999]}43`,
    display: 'block',
    width: theme.space["x1/1"],
    border: `1px solid ${theme.colors.neutral[300]}`,
    borderRadius: theme.space.x2,
    paddingHorizontal: theme.space.x5,
    paddingVertical: theme.space.x3,
    focus: {
      border: `1px solid ${theme.colors.primary[500]}`,
      boxShadow: `0 5px 10px -5px ${theme.colors.neutral[999]}43`,
    },
    ...styleSheet,
  };

  return (
    <Text as={tag} styleSheet={finalStyleSheet} {...props} />
  );
}
Input.defaultProps = {
  styleSheet: {},
};

export function Button({ as, styleSheet = {}, ...props }) {
  const {
    buttonVariant = 'primary', // Valor padrão
    ...restStyleSheet
  } = styleSheet;

  const tag = as || 'button';

  return (
    <Text
      as={tag}
      styleSheet={{
        cursor: 'pointer',
        textVariant: theme.typography.variants.body2,
        color: theme.colors.neutral['000'],
        boxShadow: `0 5px 7px -5px ${theme.colors.neutral['999']}43`,
        display: 'block',
        outline: 0,
        width: theme.space['x1/1'],
        border: `${theme.space.xpx} solid ${theme.colors[buttonVariant][900]}`,
        borderRadius: theme.space.x2,
        paddingHorizontal: {
          xs: theme.space.x5,
          sm: theme.space.x10,
        },
        paddingVertical: theme.space.x3,
        transition: 'all 0.2s ease-in-out',
        backgroundColor: theme.colors[buttonVariant][600],
        hover: {
          backgroundColor: theme.colors[buttonVariant][500],
          boxShadow: `0 5px 10px -5px ${theme.colors.neutral[999]}73`,
        },
        focus: {
          backgroundColor: theme.colors[buttonVariant][700],
          boxShadow: `0 5px 10px -5px ${theme.colors.neutral[999]}93`,
        },
        ...restStyleSheet,
      }}
      {...props}
    />
  );
}

Button.defaultProps = {
  styleSheet: {}, // Garante que styleSheet nunca seja undefined
};
