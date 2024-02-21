import dash_text_to_speech
from dash import Dash, callback, html, Input, Output
import dash_mantine_components as dmc
import dash_bootstrap_components as dbc

app = Dash(__name__)

app.layout = html.Div([
    dash_text_to_speech.DashTextToSpeech(
        id='input',
        text='You have entered my value',
        pitch=0.5,
        rate=1.0,
        volume=0.3,
    ),
    html.Div(
        children=[
            dbc.Label("Pitch"),
            dmc.Slider(id='pitch_slider', min=0.5, max=2, step=0.1),

            dbc.Label("Rate"),
            dmc.Slider(id='rate_slider', min=0.5, max=2, step=0.1),

            dbc.Label("Volume"),
            dmc.Slider(id='volume_slider', min=0.5, max=2, step=0.1),
        ]
    ),
    html.Div(id='output')
])


@callback(Output('input', 'pitch'),
          Input('pitch_slider', 'value'))
def pitch_slider(value):
    return value


@callback(Output('input', 'rate'),
          Input('rate_slider', 'value'))
def rate_slider(value):
    return value


@callback(Output('input', 'volume'),
          Input('volume_slider', 'value'))
def volume_slider(value):
    return value


@callback(Output('output', 'children'), Input('input', 'text'))
def display_output(value):
    return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)