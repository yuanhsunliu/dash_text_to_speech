
module DashTextToSpeech
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/myauo_dashtexttospeech.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_text_to_speech",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "async-DashTextToSpeech.js",
    external_url = "https://unpkg.com/dash_text_to_speech@0.0.1/dash_text_to_speech/async-DashTextToSpeech.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-DashTextToSpeech.js.map",
    external_url = "https://unpkg.com/dash_text_to_speech@0.0.1/dash_text_to_speech/async-DashTextToSpeech.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_text_to_speech.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_text_to_speech.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
