class Api::V1::EncountersController < Api::V1::ApiController
  def show
    encounter = Encounter.find(params[:id])
    choices = encounter.choices

    render json: {encounter: encounter, choices: choices}
  end
end
