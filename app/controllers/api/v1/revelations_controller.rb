class Api::V1::RevelationsController < Api::V1::ApiController
  def index
    user = current_user
    revelations = user.revelations

    render json: revelations, include: {journal: {include: :character}}
  end
end
