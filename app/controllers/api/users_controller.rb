class Api::UsersController < ApplicationController
  
  before_action :authenticate_user!
 
  def update
    user = User.find(params[:id])
    user.name = params[:name] ? params[:name] : user.name
    user.email = params[:email] ? params[:email] : user.email
    file = params[:file]

    if file && file != '' 
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        user.image = cloud_image['secure_url']
        if user.save 
          render json: user 
        else 
          render json: { errors: user.errors.full_messages }, status: 422
        end
      rescue => e
        render json: { errors: e }, status: 422
      end
    else 
      if user.save 
        render json: user 
      else 
        render json: { errors: user.errors.full_messages }, status: 422
      end
    end
  end


  def userEnrollments
    @user = User.find(params[:id])
    render json: @user.enrollments
  end

  def userClassrooms
    @user = User.find(params[:id])
    render json: @user.classrooms
  end

end
