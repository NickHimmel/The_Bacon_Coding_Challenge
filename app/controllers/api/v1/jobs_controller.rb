class Api::V1::JobsController < Api::V1::BaseController
  before_action :set_job, only: [:show, :update]

  def index
    @jobs = Job.all
    json_response(@jobs)
  end

  def create
    @job = Job.create!(job_params)
    json_response(@job, :created)
  end

  def show
    json_response(@job)
  end

  def update
    @job.update!(job_params)
    head :no_content
  end

  private

  def job_params
    params.permit(:title, :company, :level, :description, :city, :state, :user_id)
  end

  def set_job
    @job = Job.find(params[:id])
  end

end
