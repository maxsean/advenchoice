class Api::V1::CharactersController < Api::V1::ApiController
  def index
    characters = Character.all

    render json: characters
  end
end
