class Api::V1::UsersController < Api::V1::ApiController
  def index
    if current_user
      render json: { user: current_user }
    else
      render json: { user: {id: false} }
    end
  end

  def create
    user = User.new(user_params)
    user.password = params[:password]
    user.password_confirmation = params[:password_confirmation]
    if user.save
      render json: user, status: :created
    else
      user.valid?
      render json: { error: user.errors }, status: :unprocessable_entity
    end
  end

  def update
    body = JSON.parse(request.body.read)
    user = User.find(params[:id])

    user.update(encounter: body["new_encounter"])
  end

  protected

  def user_params
    params.require(:user).permit(:handle, :email, :first_name, :last_name)
  end

end
