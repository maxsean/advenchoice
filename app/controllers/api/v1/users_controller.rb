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
    page = body["new_encounter"]

    if page < 1
      user.update(encounter: 1)
    elsif page > Encounter.count
      user.update(encounter: Encounter.count)
    else
      user.update(encounter: page)
    end
  end

  protected

  def user_params
    params.require(:user).permit(:handle, :email, :first_name, :last_name)
  end

end
