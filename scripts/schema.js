/**
 * Alice response schema.
 * See: https://yandex.ru/dev/dialogs/alice/doc/protocol-docpage/#response
 */

const noImageSchema = () => ({
  response: response(),
  session: session(),
  version: version(),
});

const bigImageSchema = () => ({
  response: {
    ...response(),
    card: bigImage()
  },
  session: session(),
  version: version(),
});

const itemsListSchema = () => ({
  response: {
    ...response(),
    card: itemsList()
  },
  session: session(),
  version: version(),
});

const response = () => ({
  $required: true,
  text: {
    $type: 'string',
    $required: true,
    $maxLength: 1024
  },
  tts: {
    $type: 'string',
    $maxLength: 1024
  },
  buttons: [{
    title: {
      $type: 'string',
      $required: true,
      $maxLength: 64
    },
    payload: {
      $type: 'object'
    },
    url: {
      $type: 'string',
      $maxLength: 1024
    },
    hide: {
      $type: 'boolean',
    }
  }],
  end_session: {
    $type: 'boolean',
    $required: true,
  },
});

const session = () => ({
  $required: true,
  user_id: {
    $type: 'string',
    $required: true,
  },
  session_id: {
    $type: 'string',
    $required: true,
  },
  message_id: {
    $type: 'number',
    $required: true,
  },
  new: {
    $type: 'boolean',
  }
});

const version = () => ({
  $type: 'string',
  $required: true,
});

const bigImage = () => ({
  type: 'BigImage',
  ...image()
});

const itemsList = () => ({
  type: 'ItemsList',
  header: {
    text: {
      $type: 'string',
      $maxLength: 64
    }
  },
  items: {
    $type: 'array',
    $required: true,
    $item: image(),
    $maxLength: 5
  },
  footer: {
    text: {
      $type: 'string',
      $maxLength: 64
    },
    button: imageButton()
  },
});

const imageButton = () => ({
  text: {
    $type: 'string',
    $maxLength: 64
  },
  url: {
    $type: 'string',
    $maxLength: 1024
  },
  payload: {
    $type: 'object'
  },
});

const image = () => ({
  image_id: {
    $type: 'string',
    $required: true,
  },
  title: {
    $type: 'string',
    $maxLength: 128
  },
  description: {
    $type: 'string',
    $maxLength: 256
  },
  button: imageButton()
});

module.exports = {
  noImageSchema: noImageSchema(),
  bigImageSchema: bigImageSchema(),
  itemsListSchema: itemsListSchema(),
};
