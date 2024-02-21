# AUTO GENERATED FILE - DO NOT EDIT

#' @export
myauoDashTextToSpeech <- function(id=NULL, paused=NULL, pitch=NULL, rate=NULL, text=NULL, volume=NULL) {
    
    props <- list(id=id, paused=paused, pitch=pitch, rate=rate, text=text, volume=volume)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashTextToSpeech',
        namespace = 'dash_text_to_speech',
        propNames = c('id', 'paused', 'pitch', 'rate', 'text', 'volume'),
        package = 'dashTextToSpeech'
        )

    structure(component, class = c('dash_component', 'list'))
}
