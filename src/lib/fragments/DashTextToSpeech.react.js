import React, {Component} from 'react';
import IconButton from '@mui/material/IconButton';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AdjustIcon from '@mui/icons-material/Adjust';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import PropTypes from 'prop-types';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class DashTextToSpeech extends Component {
    constructor(props) {
        super(props);
        this.state = {
          paused: true,
          voice: '',
          pitch: 0.5,
          rate: 1.0,
          volume: 0.5,
          text: props.text,
          speeches: []
        }
        this.voices = [];

        this.getSpeeches().then((voices) => {
            this.voices = voices;
            for(var v of this.voices) {
                if (v.default === true) {
                    this.state.voice = v;
                }
            }
            this.setState({ speeches: this.voices });
        });

        this.handlePlay = this.handlePlay.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleVoiceChange = this.handleVoiceChange.bind(this);
        this.handlePitchChange = this.handlePitchChange.bind(this);
        this.handleRateChange = this.handleRateChange.bind(this);
        this.handleVolumeChange = this.handleVolumeChange.bind(this);

        //this.handleVolumeChange = this.handleVolumeChange.bind(this);
    }

    handlePitchChange = (e) => {
        this.state.pitch = parseFloat(e.target.value);
        //this.setState({ pitch: parseFloat(e.target.value) });
    }

    handleRateChange = (e) => {
        this.state.rate = parseFloat(e.target.value);
        //this.setState({ rate: parseFloat(e.target.value) });
    }

    handleVolumeChange = (e) => {
        this.state.volume = parseFloat(e.target.value);
        //this.setState({ volume: parseFloat(e.target.value) });
    }

    handlePlay = (e) => {
        const synth = window.speechSynthesis;

        if (this.props.paused) {
            synth.resume();
        } else {
            const utterance = new window.SpeechSynthesisUtterance();
            utterance.voice = this.state.voice;
            utterance.pitch = this.state.pitch;
            utterance.rate = this.state.rate;
            utterance.volume = this.state.volume;
            utterance.text = this.state.text;
            utterance.lang = this.state.voice.lang;
            console.log(utterance);

            synth.speak(utterance);
        }

        this.state.paused = false;
        this.setState({ paused: false });
    }

    handlePause = (e) => {
        const synth = window.speechSynthesis;
        synth.pause();
        this.state.paused = true;
        this.setState({ paused: true });
    }

    handleStop = (e) => {
        const synth = window.speechSynthesis;
        synth.cancel();
        this.state.paused = false;
        this.setState({ paused: false });
    }

    handleVoiceChange = (event) => {
    console.log(event.target.value);
        const voices = window.speechSynthesis.getVoices();

        this.state.voice = voices.find((v) => v.name === event.target.value);
        this.setState({ voice: this.state.voice });
    }

    getSpeeches = () => {
        return new Promise(
            function (resolve, reject) {
                let synth = window.speechSynthesis;
                let id;

                id = setInterval(() => {
                    if (synth.getVoices().length !== 0) {
                        resolve(synth.getVoices());
                        clearInterval(id);
                    }
                }, 10);
            }
        )
    }

    render() {
        const {id, text, pitch, rate, volume, paused, setProps} = this.props;

        this.state.pitch = pitch;
        this.state.rate = rate;
        this.state.volume = volume;

        //console.log(this.voices);
        //console.log(this.props);
        //console.log(this.state.voice.name);

        return (
    <div id={id}>

      <FormControl fullWidth>
        <InputLabel id="voice-label">Voice</InputLabel>
        <Select
          labelId="voice-select-label"
          id="voice-select"
          value={this.state.voice.name}
          label="Voice"
          onChange={this.handleVoiceChange}
        >
          {this.voices.map((v) => (
            <MenuItem key={v.name} value={v.name}>{v.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <IconButton aria-label="play" size="large" onClick={this.handlePlay}>
          {this.state.paused ? <AdjustIcon />: <PlayCircleIcon />}
      </IconButton>

      <IconButton aria-label="pause" size="large" onClick={this.handlePause}>
          <PauseCircleIcon />
      </IconButton>

      <IconButton aria-label="stop" size="large" onClick={this.handleStop}>
          <StopCircleIcon />
      </IconButton>
    </div>
        );
    }
}

DashTextToSpeech.defaultProps = {};

DashTextToSpeech.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    text: PropTypes.string,

    /**
     * The value displayed in the input.
     */
    pitch: PropTypes.number,

    /**
     * The value displayed in the input.
     */
    rate: PropTypes.number,

    /**
     * The value displayed in the input.
     */
    volume: PropTypes.number,

    /**
     * The value displayed in the input.
     */
    paused: PropTypes.bool,

    /** Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};