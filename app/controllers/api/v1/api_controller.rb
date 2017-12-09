class Api::V1::ApiController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }
  helper_method :current_user

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def authenticate_user_api!
    if !user_signed_in?
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  def render_object_errors(object)
    render json: { error: object.errors }, status: :unprocessable_entity
  end

end
