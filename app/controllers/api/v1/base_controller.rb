class Api::V1::BaseController < ApplicationController
  respond_to :json
  include Response
  include ExceptionHandler
  protect_from_forgery with: :null_session
  skip_before_filter  :verify_authenticity_token
end
