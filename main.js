$(document).ready(function() {
    // Adiciona uma tarefa à lista
    $('#task-form').submit(function(event) {
      event.preventDefault();
      var taskName = $('#task-input').val();
      if (taskName.trim() !== '') {
        $('#task-list').append('<li>' + taskName + '</li>');
        $('#task-input').val('');
      }
    });
  
    // Marca ou desmarca uma tarefa como concluída ao clicar nela
    $('#task-list').on('click', 'li', function() {
      $(this).toggleClass('completed');
    });
  });
  