class Api::V1::EncountersController < Api::V1::ApiController
  def show
    encounter = Encounter.find(params[:id])

    render json: encounter, include: {choices: {include: :outcomes}}
  end
end
