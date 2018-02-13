class Api::V1::EncountersController < Api::V1::ApiController
  def show
    encounter = Encounter.find(params[:id])
    journals = encounter.journals

    if current_user && journals.length > 0
      journals.each do |j|
        Revelation.create(user: current_user, journal: j)
      end
    end

    render json: encounter, include: {choices: {include: :outcomes}}
  end
end
