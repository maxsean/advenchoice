class Api::V1::EncountersController < Api::V1::ApiController
  def show
    encounter = Encounter.find(params[:id])
    rev = encounter.revelations

    if current_user && rev.length > 0
      rev.each do |r|
        Journal.create(user: current_user, revelation: r)
      end
    end

    render json: encounter, include: {choices: {include: :outcomes}}
  end
end
