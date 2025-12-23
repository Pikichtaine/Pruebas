      var state = {
            lists: [
                { id: 1, name: 'Lista de tareas' },
                { id: 2, name: 'Compras' },
                { id: 3, name: 'Profecion' },
                { id: 4, name: 'Pruebas' }
            ],
            selectedListId: 1,
            isDropdownOpen: false,
            editingId: null,
            editingName: '',
            deletingId: null
        };

// ( DOM )

        var selectButton = document.getElementById('selectButton');
        var selectedName = document.getElementById('selectedName');
        var chevron = document.getElementById('chevron');
        var dropdown = document.getElementById('dropdown');

// ( /DOM )

// ( Functions )
        function renderDropdown() {
            dropdown.innerHTML = '';
            
            state.lists.forEach(function(list) {
                var item = document.createElement('div');
                item.className = 'dropdown-item';
                if (list.id === state.selectedListId) {
                    item.classList.add('selected');
                }
                if (list.id === state.editingId) {
                    item.classList.add('editing');
                }
                if (list.id === state.deletingId) {
                    item.classList.add('deleting');
                }

                if (state.editingId === list.id) {
                    item.innerHTML = '<div class="edit-mode">' +
                        '<input type="text" class="edit-input" value="' + state.editingName + '" id="editInput">' +
                        '<button class="icon-btn save">' +
                            '<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />' +
                            '</svg>' +
                        '</button>' +
                        '<button class="icon-btn cancel">' +
                            '<svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                                '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />' +
                            '</svg>' +
                        '</button>' +
                    '</div>';

// (modo de editar)

                    var input = item.querySelector('.edit-input');
                    var saveBtn = item.querySelector('.save');
                    var cancelBtn = item.querySelector('.cancel');

                    input.addEventListener('input', function(e) {
                        state.editingName = e.target.value;
                    });

                    input.addEventListener('keydown', function(e) {
                        if (e.key === 'Enter') saveEdit();
                        if (e.key === 'Escape') cancelEdit();
                    });

                    saveBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        saveEdit();
                    });

                    cancelBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        cancelEdit();
                    });

                    setTimeout(function() { input.focus(); }, 0);

                } else if (state.deletingId === list.id) {
                    item.innerHTML = '<div class="delete-confirm">' +
                        '<p class="delete-text">¿Eliminar "' + list.name + '"?</p>' +
                        '<div class="delete-buttons">' +
                            '<button class="btn confirm">Eliminar</button>' +
                            '<button class="btn cancel-delete">Cancelar</button>' +
                        '</div>' +
                    '</div>';

                    var confirmBtn = item.querySelector('.confirm');
                    var cancelBtn = item.querySelector('.cancel-delete');

                    confirmBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        confirmDelete();
                    });

                    cancelBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        cancelDelete();
                    });

                } else {
                    var disabledAttr = state.lists.length === 1 ? ' disabled' : '';
                    var selectedClass = list.id === state.selectedListId ? 'selected' : '';
                    
                    item.innerHTML = '<div class="item-content ' + selectedClass + '">' +
                        '<span class="name">' + list.name + '</span>' +
                        '<div class="item-buttons">' +
                            '<button class="icon-btn edit" data-id="' + list.id + '">' +
                                '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />' +
                                '</svg>' +
                            '</button>' +
                            '<button class="icon-btn delete" data-id="' + list.id + '"' + disabledAttr + '>' +
                                '<svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">' +
                                    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />' +
                                '</svg>' +
                            '</button>' +
                        '</div>' +
                    '</div>';

                    var content = item.querySelector('.item-content');
                    var editBtn = item.querySelector('.edit');
                    var deleteBtn = item.querySelector('.delete');

                    content.addEventListener('click', function() {
                        selectList(list.id);
                    });
                    
                    editBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        startEdit(list);
                    });

                    deleteBtn.addEventListener('click', function(e) {
                        e.stopPropagation();
                        startDelete(list.id);
                    });
                }

                dropdown.appendChild(item);
            });
        }

        function toggleDropdown() {
            state.isDropdownOpen = !state.isDropdownOpen;
            dropdown.classList.toggle('open', state.isDropdownOpen);
            chevron.classList.toggle('open', state.isDropdownOpen);
        }

        function selectList(id) {
            if (!state.editingId && !state.deletingId) {
                state.selectedListId = id;
                var selected = state.lists.find(function(list) {
                    return list.id === id;
                });
                selectedName.textContent = selected.name;
                state.isDropdownOpen = false;
                dropdown.classList.remove('open');
                chevron.classList.remove('open');
                renderDropdown();
            }
        }

        function startEdit(list) {
            state.editingId = list.id;
            state.editingName = list.name;
            renderDropdown();
        }

        function saveEdit() {
            if (state.editingName.trim()) {
                var list = state.lists.find(function(l) {
                    return l.id === state.editingId;
                });
                list.name = state.editingName.trim();
                
                if (state.selectedListId === state.editingId) {
                    selectedName.textContent = list.name;
                }
            }
            state.editingId = null;
            state.editingName = '';
            renderDropdown();
        }

        function cancelEdit() {
            state.editingId = null;
            state.editingName = '';
            renderDropdown();
        }

        function startDelete(id) {
            state.deletingId = id;
            renderDropdown();
        }

        function confirmDelete() {
            if (state.lists.length > 1) {
                state.lists = state.lists.filter(function(list) {
                    return list.id !== state.deletingId;
                });
                
                if (state.selectedListId === state.deletingId) {
                    state.selectedListId = state.lists[0].id;
                    selectedName.textContent = state.lists[0].name;
                }
            }
            state.deletingId = null;
            renderDropdown();
        }

        function cancelDelete() {
            state.deletingId = null;
            renderDropdown();
        }

        selectButton.addEventListener('click', toggleDropdown);

        document.addEventListener('click', function(e) {
            if (!e.target.closest('.select-wrapper')) {
                state.isDropdownOpen = false;
                dropdown.classList.remove('open');
                chevron.classList.remove('open');
            }
        });

        renderDropdown();