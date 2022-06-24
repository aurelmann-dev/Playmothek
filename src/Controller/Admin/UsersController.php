<?php

namespace App\Controller\Admin;

use App\Entity\Users;
use App\Form\UsersType;
use App\Repository\UsersRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('admin/users')]
class UsersController extends AbstractController
{
    // ~Admin only => See all users~
    #[Route('/', name: 'app_admin_users')]
    public function users(UsersRepository $usersRepository)
    {
        return $this->render('admin/users/users_list.html.twig', [
            'users' => $usersRepository->findAll(),
        ]);
    }

    // ~Admin only => Show one user~
    #[Route('/{id}', name: 'app_users_show', methods: ['GET'])]
    public function show(Users $user): Response
    {
        return $this->render('admin/users/show.html.twig', [
            'user' => $user,
        ]);
    }

    // ~Admin only => Create a new user~
    #[Route('/new', name: 'app_admin_user_new', methods: ['GET', 'POST'])]
    public function newUser(Request $request, UsersRepository $usersRepository, ManagerRegistry $doctrine): Response
    {
        $user = new Users();
        $form = $this->createForm(UsersType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // $usersRepository->add($user, true);
            $em = $doctrine->getManager();
            $em->persist($user);
            $em->flush();

            return $this->redirectToRoute('app_admin_users');
        }
        return $this->render('admin/users/new.html.twig', [
            'form' => $form->createView()
        ]);
    }

    // ~Admin only => Edit a user~
    #[Route('/edit/{id}', name: 'app_admin_user_edit')]
    public function editUser(Request $request, UsersRepository $usersRepository, Users $user)
    {
        $form = $this->createForm(UsersType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $usersRepository->add($user, true);
            // dd($user);
            return $this->redirectToRoute('app_admin_users');
        }
        return $this->render('admin/users/new.html.twig', [
            'form' => $form->createView()
        ]);
    }

    // ~Admin only => Delete a user~
    #[Route('/delete/{id}', name: 'app_admin_user_delete')]
    public function deletePage(UsersRepository $usersRepository, Users $user, Request $request)
    {
        $usersRepository->remove($user, true);

        $this->addFlash('delete_page', 'User supprimé.');

        return $this->redirectToRoute('app_admin_users');
    }
}
