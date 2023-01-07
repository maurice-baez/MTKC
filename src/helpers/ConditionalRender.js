/**
 *
 * ConditionalRender
 * @description Render a component only when a condition is satisfied
 * Use Case: Decluttering component render methods with repeated logic
 * Parent Components/Containers : [
 *  {
 *    route: /queryBuilder,
 *    name: <NumberPickerRange>,
 *  },
 * ]
 */

import React from 'react';
import T from 'prop-types';

function ConditionalRender({
  Component,
  FallbackComponent,
  propsToPassDown,
  shouldRender,
}) {
  if (shouldRender) {
    const isStyledComponent =
      typeof Component === 'object' && !!Component.styledComponentId;

    if (typeof Component === 'function' || isStyledComponent) {
      return <Component {...propsToPassDown} />;
    }
    return Component;
  }
  if (FallbackComponent) {
    const isStyledComponent =
      typeof FallbackComponent === 'object' &&
      !!FallbackComponent.styledComponentId;

    if (typeof FallbackComponent === 'function' || isStyledComponent) {
      return <FallbackComponent {...propsToPassDown} />;
    }
    return FallbackComponent;
  }

  return null;
}

ConditionalRender.propTypes = {
  Component: T.oneOfType([T.func, T.element, T.object]),
  FallbackComponent: T.oneOfType([T.func, T.element, T.object]),
  propsToPassDown: T.object,
  shouldRender: T.bool.isRequired,
};

export default ConditionalRender;
