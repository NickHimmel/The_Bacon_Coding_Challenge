class ApplicationController < ActionController::API
  respond_to :json
  include Response
  include ExceptionHandler
end
