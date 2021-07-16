/**
 * @externs
 * @license
 * Copyright (c) 2021 The Polymer Project Authors. All rights reserved. This
 * code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */

interface ShadyDOMInterface {
  flush: () => void;
  inUse: boolean;
  nativeMethods: {
    querySelectorAll: typeof document.querySelectorAll;
  };
  noPatch: boolean | string;
  patchElementProto: (node: Object) => void;
  wrap: (node: Node) => Node;
}

// This type alias exists because Tsickle will replace any type name used in the
// type of something with the same name with `?`. (Maybe a Closure limitation?)
// Making `ShadyDOM` an alias to an underlying type with a different name works
// around this because Tsickle appears to resolve type aliases in its output: it
// writes `undefined|ShadyDOMInterface` instead of `undefined|?` as the type for
// the `ShadyDOM` global.
type ShadyDOM = ShadyDOMInterface;
// eslint-disable-next-line no-var
declare var ShadyDOM: ShadyDOM;

/**
 * Block renaming of properties added to Node to
 * prevent conflicts with other closure-compiler code.
 */
interface EventTarget {
  __handlers?: Object;
}

interface Node {
  __shady?: Object;
}

interface IWrapper {
  _activeElement?: Node;
  // NOTE: For some reason, Closure likes to remove focus() from the IWrapper
  // class. Not yet clear why focus() is affected and not any other methods
  // (e.g. blur).
  focus(): void;
}

interface Event {
  __composed?: boolean;
  __immediatePropagationStopped?: boolean;
  __relatedTarget?: Node;
  __composedPath?: Array<EventTarget>;
  __relatedTargetComposedPath: Array<EventTarget>;
}

interface ShadowRoot {
  /**
   * Prevent renaming of this method on ShadyRoot for testing and debugging.
   */
  _renderSelf(): void;
}

// Prevent renaming of properties used by Polymer templates with
// shadyUpgradeFragment optimization
interface DocumentFragment {
  $: Object;
  __noInsertionPoint: boolean;
  nodeList: Array<Node>;
  templateInfo: Object;
}
