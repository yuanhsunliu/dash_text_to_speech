# AUTO GENERATED FILE - DO NOT EDIT

export myauo_dashtexttospeech

"""
    myauo_dashtexttospeech(;kwargs...)

A DashTextToSpeech component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `paused` (Bool; optional): The value displayed in the input.
- `pitch` (Real; optional): The value displayed in the input.
- `rate` (Real; optional): The value displayed in the input.
- `text` (String; optional): A label that will be printed when this component is rendered.
- `volume` (Real; optional): The value displayed in the input.
"""
function myauo_dashtexttospeech(; kwargs...)
        available_props = Symbol[:id, :paused, :pitch, :rate, :text, :volume]
        wild_props = Symbol[]
        return Component("myauo_dashtexttospeech", "DashTextToSpeech", "dash_text_to_speech", available_props, wild_props; kwargs...)
end

