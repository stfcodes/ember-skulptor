import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  tagName: 'label',

  attributeBindings: ['for']
});
