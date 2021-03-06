import {
  reactor,
  serviceGetters,
} from './home-assistant-js-instance';

// Return boolean if entity can be toggled.
export default function canToggle(entityId) {
  return reactor.evaluate(serviceGetters.canToggleEntity(entityId));
}
