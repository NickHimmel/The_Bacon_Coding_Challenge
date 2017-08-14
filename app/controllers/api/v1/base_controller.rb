class Api::V1::BaseController < ApplicationController
  respond_to :json
  include Response
  include ExceptionHandler
end
