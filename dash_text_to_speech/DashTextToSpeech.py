# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashTextToSpeech(Component):
    """A DashTextToSpeech component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- paused (boolean; optional):
    The value displayed in the input.

- pitch (number; optional):
    The value displayed in the input.

- rate (number; optional):
    The value displayed in the input.

- text (string; optional):
    A label that will be printed when this component is rendered.

- volume (number; optional):
    The value displayed in the input."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_text_to_speech'
    _type = 'DashTextToSpeech'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, text=Component.UNDEFINED, pitch=Component.UNDEFINED, rate=Component.UNDEFINED, volume=Component.UNDEFINED, paused=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'paused', 'pitch', 'rate', 'text', 'volume']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'paused', 'pitch', 'rate', 'text', 'volume']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(DashTextToSpeech, self).__init__(**args)
