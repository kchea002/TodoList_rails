class Api::TodosControllerController < ApplicationController

    def index
        render json: Todo.all 
    end

    def show
        render json: Todo.find(params[:id])
    end

    def create
        @todo = Todo.new(todo_params)

        if @todo.save
            render :show
        end
    end

    def update
    end

    def destroy
    end

    def review_params
        params.require(:todo).permit(:title, :body, :done)
    end

end
